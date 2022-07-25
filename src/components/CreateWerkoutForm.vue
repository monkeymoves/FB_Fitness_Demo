<template>
  <form class="formClassStyle" @submit.prevent="handleSubmit">
    <h3>Add new workout</h3>

    <label for="user">Name:</label>
    <input type="text" name="user" v-model="user" required>

    <label for="date">Date:</label>
    <input type="datetime"  name="date" v-model="date" required>

    <label for="workout">Workout type:</label>
    <input type="text" name="workout" v-model="workout" required>

    <label for="reps">Reps:</label>
    <input type="number" name="reps" v-model="reps" required>
    
    <label for="work">Work(secs):</label>
    <input type="number" name="work" v-model="work" required>

    <label for="rest">Rest(secs):</label>
    <input type="number" name="rest" v-model="rest" required>

    <label for="sets">Sets:</label>
    <input type="number" name="sets" v-model="sets" required>

    <label for="setrest">Set Rest(secs):</label>
    <input type="number" name="setrest" v-model="setrest" required>

    <label for="hold">Hold:</label>
    <input type="text" placeholder="Text input" name="user" v-model="hold" required>

    <button>Add workout</button>
  </form>
</template>

<script>
import { ref } from 'vue'


// firebase imports
import { db } from '../firebase/config'
import { addDoc, collection } from 'firebase/firestore'

export default {
  setup() {
    const workout = ref('')
    const user = ref('')
    const reps = ref('')
    const work = ref('')
    const rest = ref('')
    const setrest = ref('')
    const sets = ref('')
    const date = ref(Date())
    const hold = ref('')
    

    const handleSubmit = async () => {

      const colRef = collection(db, 'workouts')
      await addDoc(colRef, { 
        workout: workout.value, 
        user: user.value,
        work: work.value,
        reps: reps.value,
        rest: rest.value,
        setrest: rest.value,
        sets: sets.value,
        date: date.value,
        hold: hold.value,
      })
      console.log( user.value, date.value, reps.value, workout.value, work.value, rest.value, sets.value, setrest.value, hold.value)
      console.log("poo")
      // reset the form
    
      user.value = ''
      workout.value = ''
      reps.value = ''
      work.value = ''
      rest.value = ''
      setrest.value = ''
      sets.value = ''
      date.value = ''
      hold.value = ''

    }

    return { handleSubmit,  user, workout, date, reps, work, rest,  sets, setrest, hold }
  }
}
</script>

<style>
/* Style the form - display items horizontally */
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

.formClassStyle {

  list-style-type: none;
  background: rgb(188, 188, 189);
  padding: 20px;
  border-radius: 6px;
  margin-bottom: 12px;
  /* display: flex; */

}


</style>