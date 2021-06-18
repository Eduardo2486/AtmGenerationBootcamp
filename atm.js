let atmBankNotes = [
  {
    bankNote: 500,
    quantity: 4
  },
  {
    bankNote: 1000,
    quantity: 2
  },
  {
    bankNote: 100,
    quantity: 8
  },
  {
    bankNote: 200,
    quantity: 10
  },
  {
    bankNote: 20,
    quantity: 4
  },
  {
    bankNote: 5,
    quantity: 3
  },
  {
    bankNote: 10,
    quantity: 1
  },
  {
    bankNote:1,
    quantity: 2
  }
];
const getOrderBankNotes = (bankNotes) => {
  return bankNotes.sort((a,b) => a.bankNote - b.bankNote);
};
const withDraw = (amount) => {
  let bankNotes = [];
  let orderedBankNotes = getOrderBankNotes(atmBankNotes);
  let bankNotePosition = orderedBankNotes.length - 1;
  let withDrawAmount = 0;
  let leftToWithDraw = amount;
  while(amount != withDrawAmount){
    if(orderedBankNotes[bankNotePosition].bankNote <= leftToWithDraw){
      if(orderedBankNotes[bankNotePosition].quantity > 0){
        withDrawAmount += orderedBankNotes[bankNotePosition].bankNote;
        leftToWithDraw -= orderedBankNotes[bankNotePosition].bankNote;
        orderedBankNotes[bankNotePosition].quantity -= 1;
        bankNotes.push(orderedBankNotes[bankNotePosition].bankNote);
      }else if(bankNotePosition > 0){
        bankNotePosition -= 1;
      }else{
        return "No hay suficientes fondos, intenta con otra cantidad";
      }
    }else if(bankNotePosition > 0){
      bankNotePosition -= 1;
    }else{
      return "El cajero solo puede dar billetes de cierta denominacion, intenta con otra cantidad";
    }
  }
  console.log(atmBankNotes);
  return bankNotes;
}
console.log(withDraw(307))