import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private SERVER = "http://localhost:3000/students";
  constructor(private http: HttpClient) { }

  // Get all students
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.SERVER)
  }

  // Get a single student by ID
  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.SERVER}/${id}`)
  }

  // Add a new student
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.SERVER, student) 
  }
  // Update an existing student
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.SERVER}/${id}`, student)
  }
  // Delete a student by ID
  deleteStudent(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.SERVER}/${id}`)
  }
}

