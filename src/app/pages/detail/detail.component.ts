import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
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
    countrie: any = []
    countrieName: string = '';
    constructor(private apiService: ApiService, private route: ActivatedRoute) {}

    ngOnInit(){
        this.route.params.subscribe(params=>{
            this.countrieName = params['countrieName'];
        })
        this.getCountrie(this.countrieName)
    }
    getCountrie(param:string){
        this.apiService.getCountrie(param).subscribe({
            next: (countre:any) => {
            this.countrie = countre
                console.log('Busca concluída com sucesso!');
        },
            error: (err) =>
            {console.log('Error' + err)}

        })
    }


}
