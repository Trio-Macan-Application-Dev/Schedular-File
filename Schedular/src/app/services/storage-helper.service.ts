import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';
import { Student } from '../models/student';
import { Sesisemester } from '../models/sesisemester';
import { PelajarSubjek } from '../models/pelajarSubjek';

@Injectable({
  providedIn: 'root'
})
export class StorageHelperService {
  private admin: Admin[];
  private student: Student[];
  private sesisemester: Sesisemester[];
  private pelajarSubjek: PelajarSubjek[];
  private userLogin: number;

  constructor() {
    this.student = JSON.parse(localStorage.getItem('auth_user'));
    this.admin = JSON.parse(localStorage.getItem('auth_admin'));
    this.sesisemester = JSON.parse(localStorage.getItem('sesisemester'));
    this.pelajarSubjek = JSON.parse(localStorage.getItem('pelajar_subjek'));
    this.UserLogin = 0;
  }

  getPelajarSubjek() {
    return this.pelajarSubjek;
  }

  getAdminSessionId() {
    return this.admin[0].session_id;
  }

  getUserSessionId() {
    return this.student[0].session_id;
  }

  getCurrentSemester() {
    return this.sesisemester[1].semester;
  }

  getCurrentSesi() {
    return this.sesisemester[1].sesi;
  }

  getNoMatrik() {
    return this.student[0].login_name;
  }

  getFullName() {
    return this.student[0].full_name;
  }

  getStartDate() {
    return this.sesisemester[1].tarikh_mula;
  }

  getEndDate() {
    return this.sesisemester[1].tarikh_tamat;
  }

  set UserLogin(value: number) {
    this.userLogin = value;
  }

  get UserLogin() {
    return this.userLogin;
  }
}
