import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://brxbjwhoanqvscdiiorh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyeGJqd2hvYW5xdnNjZGlpb3JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc3MDg4ODQsImV4cCI6MjAzMzI4NDg4NH0.NSjnzJMPJAqmtkrxBLJrocl0Jgj5RmJh8zntEruDnJA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;