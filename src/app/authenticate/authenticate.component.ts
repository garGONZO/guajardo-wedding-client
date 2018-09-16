import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthenticateService } from './authenticate.service';

@Component({
	selector: 'app-authenticate',
	templateUrl: './authenticate.component.html',
	styles: ['./authenticate.component.css'],
	providers: [AuthenticateService]
})
export class AuthenticateComponent implements OnInit, OnChanges {

	response: string;

	constructor(private authenticateService: AuthenticateService) {
	}

	ngOnInit(): void {
	}

	ngOnChanges(changes: SimpleChanges): void {
	}

	// authenticate() {
	// 	this.authenticateService.authenticate().subscribe((response: string) => {
	// 		this.response = response;
	// 	});
	// }

}
