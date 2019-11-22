import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'src/app/utils/http-client';
import { MessageService } from 'src/app/utils/message.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    rel = '';

    constructor(private httpClient: HttpClient, private messageService: MessageService) {}

    ngOnInit() {}

    lambdaHello() {
        this.httpClient.get('/api/hello/lambda').subscribe(
            response => {
                console.log(response);
                this.rel = response.message;
            },
            error => {
                console.log(error);
            }
        );
    }

    dynamodbHello() {
        this.httpClient.get('/api/hello/dynamodb').subscribe(
            response => {
                console.log(response);
                this.rel = response.message;
            },
            error => {
                console.log(error);
            }
        );
    }

    messageDialog() {
        this.messageService.show({
            button: ['OK'],
            level: 'error',
            message: 'サンプルエラーが発生しました',
            title: 'サンプルエラー'
        });
    }
}
