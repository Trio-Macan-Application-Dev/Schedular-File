import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';
import { User } from '../models/user';
import { Sesisemester } from '../models/sesisemester';
import { PelajarSubjek } from '../models/pelajarSubjek';
import { PensyarahSubjek } from '../models/pensyarahSubjek';

@Injectable({
  providedIn: 'root'
})
export class StorageHelperService {
  private admin: Admin[];
  private user: User[];
  private sesisemester: Sesisemester[];
  private pelajarSubjek: PelajarSubjek[];
  private pensyarahSubjek: PensyarahSubjek[];
  private _userType: string;

  constructor() {
  }

  getPelajarSubjek() {
    this.pelajarSubjek = JSON.parse(localStorage.getItem('pelajar_subjek'));
    return this.pelajarSubjek;
  }

  getPensyarahSubjek() {
    this.pensyarahSubjek = JSON.parse(localStorage.getItem('pensyarah_subjek'));
    return this.pensyarahSubjek;
  }

  getPelajarSubjekKursus() {
    this.pelajarSubjek = JSON.parse(localStorage.getItem('pelajar_subjek'));
    return this.pelajarSubjek[0].kod_kursus;
  }

  getAdminSessionId() {
    this.admin = JSON.parse(localStorage.getItem('auth_admin'));
    return this.admin[0].session_id;
  }

  getUserSessionId() {
    this.user = JSON.parse(localStorage.getItem('auth_user'));
    return this.user[0].session_id;
  }

  getCurrentSemester() {
    this.sesisemester = JSON.parse(localStorage.getItem('sesisemester'));
    return this.sesisemester[1].semester;
  }

  getCurrentSesi() {
    this.sesisemester = JSON.parse(localStorage.getItem('sesisemester'));
    return this.sesisemester[1].sesi;
  }

  getNoMatrik() {
    this.user = JSON.parse(localStorage.getItem('auth_user'));
    return this.user[0].login_name;
  }

  getNoPekerja() {
    this.user = JSON.parse(localStorage.getItem('auth_user'));
    return this.user[0].no_pekerja;
  }

  getFullName() {
    this.user = JSON.parse(localStorage.getItem('auth_user'));
    return this.user[0].full_name;
  }

  getStartDate() {
    this.sesisemester = JSON.parse(localStorage.getItem('sesisemester'));
    return this.sesisemester[1].tarikh_mula;
  }

  getEndDate() {
    this.sesisemester = JSON.parse(localStorage.getItem('sesisemester'));
    return this.sesisemester[1].tarikh_tamat;
  }

  set userType(userType: string) {
    this._userType = userType;
  }

  get userType() {
    return this._userType;
  }
}
