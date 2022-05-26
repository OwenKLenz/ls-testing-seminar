<script>
  import ContactCard from './ContactCard.svelte';
  import { postCard, listCards, deleteCard } from './api/api.js';

  let cardData = []
  let userName
  let jobTitle
  let userImage
  let description
  let message = ""

  reset()
  loadAll()

  async function loadAll() {
    const cards = await listCards()
    console.log(cards)
    cardData = cards
  }

  async function handleDelete(index) {
    const cardToDelete = cardData.find((_, cardIndex) => {
      return index === cardIndex
    })

    const { createdAt } = cardToDelete

    try {
      await deleteCard(createdAt)
      cardData = cardData.filter(card => card.createdAt !== createdAt)
    } catch (e) {
      message = "Card was not deleted"
    }
  }

  function reset() {
    userName = "";
    jobTitle = "";
    userImage = "";
    description = "";
  }

  async function createCard() {
    if (
      userName.trim() &&
      jobTitle.trim() &&
      userImage.trim() &&
      description.trim()
    ) {
      const card = {
        userName,
        jobTitle,
        userImage,
        description
      }

      try {
        const newCard = await postCard(card)

        cardData = [
          ...cardData,
          newCard
        ]
        message = ""
      } catch (e) {
        console.log(e)
        message = "An error occurred while trying to create a card"
      }
      reset()
    } else {
      message = 'Please fill out all the fields'
    }
  }
</script>

<style>
  #form {
    width: 30rem;
    max-width: 100%;
  }
</style>

<div id="form">
  <div class="form-control">
    <label for="userName">User Name</label>
    <input type="text" bind:value={userName} id="userName" />
  </div>
  <div class="form-control">
    <label for="jobTitle">Job Title</label>
    <input type="text" bind:value={jobTitle} id="jobTitle" />
  </div>
  <div class="form-control">
    <label for="image">Image URL</label>
    <input type="text" bind:value={userImage} id="image" />
  </div>
  <div class="form-control">
    <label for="desc">Description</label>
    <textarea rows="3" bind:value={description} id="desc" />
  </div>
</div>
<button on:click={createCard}>Create Card</button>
{#if message}
  <p>{message}</p>
{/if}

{#each cardData as card, index}
<ContactCard {...card} deleteCard={() => handleDelete(index)}/>
{/each}
