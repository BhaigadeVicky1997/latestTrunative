import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trunative';
constructor(private toastr: ToastrService){
  
}

ngOninit(){


}

}
