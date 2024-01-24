function showCard(num: number) {
  const cardsArray = Array.from(document.querySelectorAll('.hideCardsMore')).slice(0, num);
  cardsArray.forEach(card => card.classList.remove('hideCardsMore'));

  const cardsAfterRemove = Array.from(document.querySelectorAll('.hideCardsMore'));
  if (!cardsAfterRemove.length) {
    return true
  } else {
    return false
  }
}

export default showCard