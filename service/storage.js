import { uuid } from "@supabase/gotrue-js/dist/module/lib/helpers";
import supabase from "../supabase";

async function insertTodo({id, title, description,}) {
    const data = await supabase
                        .from('Task')
                        .update({})
                        .upsert([{task:{'id':uuid(), 'title':title, 'description':description,'createdAt': new Date()}}])
                        .eq('id', id);
}
async function getTodo({id}) {
    return {data, error} = await supabase
                        .from('Task')
                        .select('tasks')
                        .eq('id', id);
}
function insertSubscription({id , onChange}) {
    return  update = supabase.channel()
                                    .on('postgres_changes',{event:'*', schema: 'public', table:'Task', filter:`id=eq.${id}`},(payload)=>{
                                        console.log(payload);
                                        onChange(payload);
                                    })
                                    .subscribe();
}
export const insertSub = insertSubscription;
export const getInsertTodo = insertTodo;
export const getAppTodo = getTodo;