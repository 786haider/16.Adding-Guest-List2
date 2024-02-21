var guest_list = ["Haider", "Anus", "Hassan", "Zubair", "Shazaib"];
var not_present = "Zubair";
var new_guest = "Ayesha";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam " + guest_list[i] + ",\nI invited you on my Birthday party tommorow.\n");
}
guest_list.unshift("Saima", "laiba", "Sana");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam " + guest_list[i] + ",\nI invited you on my Birthday party tommorow.I found abig dinner table so we decided to invited more guest\n");
}
