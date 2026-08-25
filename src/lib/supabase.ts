import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://nrmhfjwbelfbuaofeqjb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ybWhmandiZWxmYnVhb2ZlcWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2NTcxODgsImV4cCI6MjEwMzIzMzE4OH0.qMNa5Kk0ooRh6J1gKmFoqnUmuGVsKrovsoqF5HhDqTQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
