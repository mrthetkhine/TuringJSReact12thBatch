function liveDangerously(x?: number ) {
  // No error
  console.log(x!.toFixed());
  console.log('liveDangerously ',x);
}
//liveDangerously();
liveDangerously(1);