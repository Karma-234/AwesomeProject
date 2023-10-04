import supabase from "../supabase";

async function insertTodo({id, title, description,}) {
    const data = await supabase
                        .from('Task')
                        .insert([{id: id, title: title, description: description, created_at: new Date()}]);
}
function insertSubscription({onChange}) {
    return  update = supabase.channel()
                                    .on('postgres_changes',{event:'UPDATE', schema: 'public', table:'User'},(payload)=>{
                                        console.log(payload);
                                        onChange(payload);
                                    })
                                    .subscribe();
}
export const insertSub = insertSubscription({onChange});
export const insertTodo = insertTodo({id, title, description});