import { Component, OnInit } from '@angular/core';
import { CommonUtilitiesService } from 'src/app/common_utilities/common-utilities.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private commonUtilities: CommonUtilitiesService) { }

  ngOnInit(): void {
    
  }


}


