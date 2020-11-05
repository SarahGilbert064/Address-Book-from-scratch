// Business Logic for Address Book

function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact); 
};

//in console test objects/contructors 1 at a time to check for bugs
//test function in cosole but pushing contact to empty this.contacts array
//this.contacts = [] >>> []
//this.contacts.push ("sarah"); >>>> 1
//this.contacts; >>>> ["sarah"]


AddressBook.prototype.assignId = function () {
  this.currentId +=1;   //this will add 1 to whatever number was last assigned, giving new contact an ID number
  return this.currentId;   //return with ID number that was assigned, will always start with 0
}
// to test in cosole log
// test function first, then push 2 names into contacts (if you haven't already)
// example: this.contacts.push("sarah", "constantine") >>>> 2
// this.currentId[1] >>>>> "constantine"




//business logic for Contact object/constructor

function Contact (firstName, lastName, phoneNumber, emailAddress, physicalAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.emailAddress = emailAddress;
  this.physicalAddress = physicalAddress;
}







$(document).ready(function() {
  event.preventDefault();



}