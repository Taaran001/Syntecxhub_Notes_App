export function getAllNotes(req, res){
    res.status(200).send("Notes Fetched!")
}

export function createNote(req, res){
    res.status(201).json({message:"Notes Created!"})
}

export function updateNote(req, res){
    res.status(200).json({message:"Notes Updated!"})
}

export function deleteNote(req, res){
    res.status(200).json({message:"Notes Deleted!"})
}
