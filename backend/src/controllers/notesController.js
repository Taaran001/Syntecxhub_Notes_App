import Note from '../models/Note.js'

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getAllNotes: ", error);

        res.status(500).json({ message: "Server error" })
    }
}

export async function createNote(req, res) {
    try {
        const { title, content } = req.body
        const note = new Note({ title, content })

        const savedNote = await note.save()
        res.status(201).json(savedNote)
    } catch (error) {
        console.error("Error in CreateNote");
        res.status(500).json({ message: "Server error" })
    }
}

export async function updateNote(req, res) {
    try {
        const { title, content } = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content },
            { new: true, }
        );
        if (!updatedNote) return res.status(404).json({ message: "Note not found" })

        res.status(200).json(updateNote)
    } catch (error) {
        console.error("Error in updateNote");
        res.status(500).json({ message: "Server error" })
    }
}

export async function deleteNote(req, res) {
    try {

    } catch (error) {

    }
}
