// ============================================================
//  CONFIGURAÇÃO DO SUPABASE
//  Você vai substituir esses dois valores depois de criar
//  sua conta no Supabase (instruções no README.md)
// ============================================================
const SUPABASE_URL = 'https://bxvoaprusqcvulakkomg.supabase.co/rest/v1/';
const SUPABASE_KEY = 'sb_publishable_yHtIpkDDaz4DGxTwgHtw_g_CQNrqTKa';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);
