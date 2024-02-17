import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CountrieDetail } from '../../interface/countries-detail';
import {ApiService} from "../../service/api.service";

@Component({
    selector: 'app-detail',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './detail.component.html',
    styleUrl: './detail.component.css',
})
export class DetailComponent {
    countrie: CountrieDetail[] = []
    constructor(private apiService: ApiService) {}

    ngOnInit(){
        this.getCountrie('brazil')
    }
    getCountrie(param:string){
        this.apiService.getCountrie(param).subscribe({
            next: (countre:any) => {
            this.countrie = countre
                console.log("Busca realizada com sucesso")
        },
            error: (err) =>
            {console.log('Error' + err)}

        })
    }


}
