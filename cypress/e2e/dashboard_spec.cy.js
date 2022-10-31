describe("Reservation Dashboard", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      body: [
        {
          id: 1,
          name: "Christie",
          date: "12/29",
          time: "7:00",
          number: 12,
        },
        {
          id: 2,
          name: "Leta",
          date: "4/5",
          time: "7:00",
          number: 2,
        },
        {
          id: 3,
          name: "Pam",
          date: "1/21",
          time: "6:00",
          number: 4,
        },
      ],
    });
    cy.visit("http://localhost:3000");
  });

  it("should see the page heading, form, and reservation cards", () => {
    cy.contains("h1", "Turing Cafe Reservations");
    cy.get("form").should("be.visible");
    cy.get(".reservation-container").should("be.visible");
  });

  it("should see three reservation cards on the page with reservation details", () => {
    cy.get(".card-name").first().contains("Christie");
    cy.contains(".card-date", "12/29");
    cy.contains(".card-time", "7:00");
    cy.contains(".card-guests", "12");
    cy.contains(".card-name", "Leta");
    cy.contains(".card-date", "4/5");
    cy.contains(".card-time", "7:00");
    cy.contains(".card-guests", "2");
    cy.contains(".card-name", "Pam");
    cy.contains(".card-date", "1/21");
    cy.contains(".card-time", "6:00");
    cy.contains(".card-guests", "4");
  });

  it("should be able to enter reservation details into a form and see new reservation added", () => {
    cy.get("input[name=name]").type("Amanda");
    cy.get("input[name=date]").type("11/24");
    cy.get("input[name=time]").type("6:50");
    cy.get("input[name=number]").type(4);
    cy.get(".make-res-btn").click();
    cy.contains(".card-name", "Amanda");
    cy.contains(".card-date", "11/24");
    cy.contains(".card-time", "6:50");
    cy.contains(".card-guests", 4);
  });
});
