
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://agmglylzobmtloyvyrur.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbWdseWx6b2JtdGxveXZ5cnVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzNTg3MzIsImV4cCI6MjAzNDkzNDczMn0.lfQnaKJdsKthgnmc6RR-wzBQarZJiLeK4RPNm8Y9w28')