import { Component, OnInit } from '@angular/core';
import { AdminDetails } from '../models/admin-details';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminDetails: AdminDetails = new AdminDetails();

  ngOnInit(): void {
    const storedAdminDetails = localStorage.getItem('CurrentAdmin');
    this.adminDetails = JSON.parse(storedAdminDetails);
  }

  constructor(public loginService: LoginService) { }

  // Add admin-specific functionality and interaction with the grievance management system here
}
