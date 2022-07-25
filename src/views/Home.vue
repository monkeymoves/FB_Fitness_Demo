<template>
  <CreateWerkoutForm />
  <div class="home">
    <!-- <ul>
      <li v-for="book in books" :key="book.id">
        <div class="details">
          <h3 @click="handleDelete(book)">{{ book.title }}</h3>
          <p>By {{ book.author }}</p>
        </div>
        <div :class="{ icon: true, fav: book.isFav }" @click="handleUpdate(book)">
          <span class="material-icons">favorite</span>
        </div>
      </li>
    </ul> -->

    <ul>
      <li v-for="workout in workouts" :key="workout.id">
        <div class="details">
          <h3 @click="handleDelete(workout)">Sets: {{ workout.sets }} on: {{ workout.hold }}</h3>
          <p>By {{ workout.user }}</p>
        </div>
        <div :class="{ icon: true, fav: workout.isFav }" @click="handleUpdate(workout)">
          <span class="material-icons">favorite</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import CreateWerkoutForm from '@/components/CreateWerkoutForm'
import getCollection from '@/composables/getCollection'

import {db} from '../firebase/config'
import {doc, deleteDoc, updateDoc} from 'firebase/firestore'

export default {
  name: 'Home',
  components: { CreateWerkoutForm },
  setup() {
    const { documents: books } = getCollection('books')
    const { documents: workouts } = getCollection('workouts')


    // delete docs
    const handleDelete = (workout) => {
      const docRef = doc(db, 'workouts', workout.id)
      deleteDoc(docRef)
    }
    // update doc
    const handleUpdate = (workout) => {
      const docRef = doc(db, 'workouts', workout.id)
      updateDoc(docRef, {
        isFav: !workout.isFav
      })
    }

    return { books, workouts, handleDelete, handleUpdate }
  }
}
</script>

<style>
.home ul {
  padding: 0;
}
.home li {
  list-style-type: none;
  background: #fff;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 12px;
  display: flex;
}
.home li .details {
  margin-right: auto;
}
.home li h3 {
  margin: 0;
  margin-bottom: 4px;
}
.home li h3:hover {
  cursor: pointer;
  text-decoration: line-through;
}
.home li p {
  margin: 0;
}
.icon {
  color: #bbbbbb;
  cursor: pointer;
}
.icon.fav {
  color: #f83f5e;
}


</style>