import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto'

const supabaseUrl = 'https://gilcjigklupxiuievnpn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpbGNqaWdrbHVweGl1aWV2bnBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4ODA3MjQsImV4cCI6MTk4NTQ1NjcyNH0.Qrt3mPLFyI0khnuYJyJodcptJH798sr08WA6a5UzF-c'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
    realtime: {
        params: {
          eventsPerSecond: 10,
        },
      },
})
