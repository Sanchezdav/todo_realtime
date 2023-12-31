import { Controller } from "@hotwired/stimulus"


// Connects to data-controller="tasks"
export default class extends Controller {
  static targets = ["form", "checkbox"]

  submitForm(event) {
    this.formTarget.requestSubmit()
  }
}
