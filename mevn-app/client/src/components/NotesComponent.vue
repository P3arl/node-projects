<template>
  <div>
    <h1>Latest Posts</h1>
    <div class="create-note">
      <label for="create-note">Note Something </label>
      <input type="text"
      id="create-note"
      v-model="note" placeholder="Create a Note"
      v-on:keyup.enter="createNote"
      >
      <button @click="createNote">Note!</button>
    </div>
    <hr />
    <p v-if="error">{{ error }}</p>
    <div class="notes-container">
      <div class="note"
        v-for="(note, index) in notes"
        :item="note"
        :index="index"
        :key="note._id"
        v-on:dblclick="deleteNote(note._id)"
      >
      <p class="note-date"><b>CREATED:</b> {{note.createdAt.toUTCString()}} <b>MODIFIED:</b> {{note.modifiedAt.toUTCString()}}</p>
        <p v-if="!note.editing"
        class="note-text"
        @click="note.editing = !note.editing"
        >{{ note.note }}</p>
        <input v-else class="edit-note" type="text"
        v-model="note.note"
        @keyup.enter="editNote(note.note, note._id)"
        >
      </div>
    </div>
  </div>
</template>

<script>
import NotesService from '../NotesService'

export default {
  name: 'NotesComponent',
  data () {
    return {
      notes: [],
      error: '',
      note: ''
    }
  },
  async created () {
    try {
      this.notes = await NotesService.getNotes()
    } catch (error) {
      this.error = error.message
    }
  },
  methods: {
    async createNote () {
      await NotesService.createNote(this.note)
      this.note = ''
      this.notes = await NotesService.getNotes()
    },
    async deleteNote (id) {
      await NotesService.deleteNote(id)
      this.notes = await NotesService.getNotes()
    },
    // startEdit () {
    //   this.editing = true
    // },
    async editNote (note, id) {
      await NotesService.editNote(note, id)
      this.notes = await NotesService.getNotes()
      // this.editing = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notes-container {
  max-width: 800px;
  margin: 0 auto;
}

.note {
  position: relative;
  border: 1px solid lightblue;
  background-color: antiquewhite;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

.note-text {
  font-size: 16px;
  font-weight: 600;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin-bottom: 0;
}

.note-date {
  font-size: 11px;
  margin-top: 0%;
}
</style>
