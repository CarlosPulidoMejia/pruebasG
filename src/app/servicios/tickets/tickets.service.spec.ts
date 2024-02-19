import { TestBed, inject } from '@angular/core/testing';

import { TicketsService } from './ticket.service';

describe('ProyectoBauService', () => {
    beforeEach(() => {
    TestBed.configureTestingModule({
            providers: [TicketsService]
        });
    });

    it('should be created', inject([TicketsService], (service: TicketsService) => {
        expect(service).toBeTruthy();
    }));
});
