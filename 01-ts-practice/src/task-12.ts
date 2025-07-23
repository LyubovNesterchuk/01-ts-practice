// Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.

function sendDoneStatus(callback: (status: string) => void): void {
  callback("done");
}

sendDoneStatus((message) => {
  console.log(`Status: ${message}`); 
});

// Status: done