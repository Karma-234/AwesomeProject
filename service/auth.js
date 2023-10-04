import supabase from "../supabase";

export async function Login({username, password}) {
    const {user, error} = await supabase.auth.signInWithPassword({email:`${username}@task.com`,password: password});

    return {user, error};
}