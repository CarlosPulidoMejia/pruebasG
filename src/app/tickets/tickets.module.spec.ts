import { TicketsModule } from './tickets.module';

describe('ticketsModule', () => {
  let ticketsModule: TicketsModule;

  beforeEach(() => {
    ticketsModule = new TicketsModule();
  });

  it('should create an instance', () => {
    expect(ticketsModule).toBeTruthy();
  });
});
