import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';
import { Student } from '../models/student';
import { Sesisemester } from '../models/sesisemester';

@Injectable({
  providedIn: 'root'
})
export class StorageHelperService {
  private admin: Admin[];
  private student: Student[];
  private sesisemester: Sesisemester[];

  constructor() {
    this.student = JSON.parse(localStorage.getItem('auth_user'));
    this.admin = JSON.parse(localStorage.getItem('auth_admin'));
    this.sesisemester = JSON.parse(localStorage.getItem('sesisemester'));
  }

  getAdminSessionId() {
    return this.admin[0].session_id;
  }

  getUserSessionId() {
    return this.student[0].session_id;
  }

  getCurrentSemester() {
    return this.sesisemester[0].semester;
  }

  getCurrentSesi() {
    return this.sesisemester[0].sesi;
  }

  getNoMatrik() {
    return this.student[0].login_name;
  }
}
