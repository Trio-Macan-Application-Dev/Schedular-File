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
    this.UserLogin = 1;
  }

  getPelajarSubjek() {
    this.pelajarSubjek = JSON.parse(localStorage.getItem('pelajar_subjek'));
    return this.pelajarSubjek;
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
    this.student = JSON.parse(localStorage.getItem('auth_user'));
    return this.student[0].session_id;
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
    this.student = JSON.parse(localStorage.getItem('auth_user'));
    return this.student[0].login_name;
  }

  getFullName() {
    this.student = JSON.parse(localStorage.getItem('auth_user'));
    return this.student[0].full_name;
  }

  getStartDate() {
    this.sesisemester = JSON.parse(localStorage.getItem('sesisemester'));
    return this.sesisemester[1].tarikh_mula;
  }

  getEndDate() {
    this.sesisemester = JSON.parse(localStorage.getItem('sesisemester'));
    return this.sesisemester[1].tarikh_tamat;
  }

  set UserLogin(value: number) {
    this.userLogin = value;
  }

  get UserLogin() {
    return this.userLogin;
  }
}
