class ExamplePage{
    elements= {
        textTitle: (): string => '//h1[text()="Kitchen Sink"]',
    }

    verifyTitle(): void{
        cy.xpath(this.elements.textTitle()).should("be.visible")
    }

}
export default ExamplePage