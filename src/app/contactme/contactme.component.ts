import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import * as ExcelJS from 'exceljs';

import {ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { personService } from '../person.service';
import { person } from '../person.model';
@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {
  arr:[]=[]

  constructor(private connectService:personService){}
  
name:string=''
email:string=''
message:string=''
  person:person[]=[
    {
      name:this.name,
      email:this.email,
      message:this.message
    }
   ]
  // registrationForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.registrationForm = this.fb.group({
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   });
  // }
  // saveToExcel(formData: any) {
  //   const formArray = [];
  //   const formObj:any = {};
  //   Object.keys(formData.controls).forEach(key => {
  //     const control = formData.controls[key];
  //     formObj[key] = control.value;
  //   });
  //   formArray.push(formObj);
  //   const worksheet = XLSX.utils.json_to_sheet(formArray);
  //   const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  //   const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  //   this.saveExcelFile(excelBuffer);
  // }
  // saveExcelFile(buffer: any) {
  //   const data: Blob = new Blob([buffer], {type: 'application/octet-stream'});
  //   const fileName: string = 'registration.xlsx';
  //   FileSaver.saveAs(data, fileName);
  // }
  info:any[]=[]
  ngOnInit(): void {
    
    this.connectService.getInfo().subscribe((response:any)=>{
     
      this.info=response[0].contacts
        
      })
    }

    saveInfo(){
      if(this.name!='' &&this.email!='' && this.message!=''){
        this.person=[
          {            
                name:this.name,
                email:this.email,
                message:this.message
              
             
          }
        ]
        console.log(this.person)
         this.connectService.addInfo(this.person) 
         alert('your message has sucssesfully sent')
         this.name=''
         this.email=''
         this.message=''
      }else{
        alert("some of input field is empty")
      }
    

      }
    
export(){
  // for(let i of this.userList){
  //   i.name = this.name1
  //   i.email = this.email
  //   i.message = this.message

  // }
  
    // /* pass here the table id */
    // let element = document.getElementById('excel-table');
    // const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    // /* generate workbook and add the worksheet */
    // const wb: XLSX.WorkBook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    // /* save to file */  
    // XLSX.writeFile(wb, this.fileName);
    // const workbook = new ExcelJS.Workbook();
    // const worksheet = workbook.addWorksheet('Registration Form')

    // worksheet.addRow(['Name', FormData.name])
    // worksheet.addRow(['Email', FormData.email])
    // worksheet.addRow(['Message', FormData.message])
    // workbook.xlsx.writeBuffer().then((buffer: ArrayBuffer)=>{
    //   const blob = new Blob([buffer],{type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
    //   saveAs(blob, 'registration.xlsx')
    // })

 
  
}
}




