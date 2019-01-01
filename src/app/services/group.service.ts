import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subscription, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Group } from '../models/group.model';
import { GroupMember } from '../models/groupMember.model';


@Injectable()
export class GroupService {
  myOwnedGroups: Group[];
  myOwnedGroupsChanged = new Subject<Group[]>();

  myGroups: Group[];
  myGroupsChanged = new Subject<Group[]>();

  private activeGroup: Group;
  activeGroupChanged = new Subject<Group>();
  myActiveGroupId: string;

  private activeGroupMembers: GroupMember[];
  activeGroupMembersChanged = new Subject<GroupMember[]>();
  myActiveMemberInfo: GroupMember;

  private myEmail: string;
  private fbSubs: Subscription[] = [];


  constructor(
    //private db: AngularFireDatabase,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private userService: UserService
    )
    {
        this.setInitialGroup('0B3KhEc2f6pen190tm41')
    }
  setInitialGroup(groupid: string){
      this.myActiveGroupId = groupid;
  }
  getMyOwnedGroups()  {
    this.myEmail =  this.userService.myEmail;
    if (!this.myEmail){this.myEmail='dummy1'}
    console.log("Group service: current user email: " + this.myEmail);
    this.fbSubs.push(this.afs
      .collection('groups', ref => ref.where("groupOwner", "==", this.myEmail))
      .snapshotChanges()
      .pipe(map(docArray => {
        return docArray.map(doc => {
            return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data()
            }
        })
      }))
      .subscribe((groups: Group[]) => {
          this.myOwnedGroups = groups;
          this.myOwnedGroupsChanged.next([...this.myOwnedGroups]);
          console.log('Manage Groups: ' + this.myOwnedGroups.toString())
      })
    );
  }

  createGroup(groupName: string, groupOwner: string) {

    this.afs.collection('groups').add(
      { 'groupName': groupName,
        'groupOwner': groupOwner
       });
  }

  // currently, this gets all groups.

  getMyGroups()  {
    this.fbSubs.push(this.afs
      .collection('groups')
      .snapshotChanges()
      .pipe(map(docArray => {
        return docArray.map(doc => {
            return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data()
            }
        })
      }))
      .subscribe((groups: Group[]) => {
          this.myGroups = groups;
          this.myGroupsChanged.next([...this.myGroups]);
          console.log('User Groups: ' + this.myGroups)
      }  ));
  }

  setActiveGroup(selectedGroupId: string){
    this.activeGroup = this.myGroups.find(
      ex => ex.id === selectedGroupId
    );
    this.myActiveGroupId = selectedGroupId;
    this.activeGroupChanged.next({ ...this.activeGroup });
    console.log('Group Service - active group: ' + this.activeGroup.id);

    this.fbSubs.push(this.afs
      .collection('groups').doc(this.activeGroup.id).collection('groupMembers')
      .snapshotChanges()
      .pipe(map(docArray => {
        return docArray.map(doc => {
            return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data()
            }
        })
      }))
      .subscribe((members: GroupMember[]) => {
          this.activeGroupMembers = members;
          this.activeGroupMembersChanged.next([...this.activeGroupMembers]);
          console.log('Group service: ' + this.activeGroupMembers);
          this.myActiveMemberInfo = this.activeGroupMembers.find(
            ex => ex.memberId === this.userService.myEmail
          );
      }  )
    );
  }

  getActiveGroup(){
    return { ...this.activeGroup };
  }

  cancelSubscriptions() {
    this.fbSubs.forEach(sub => sub.unsubscribe());
  }

}
