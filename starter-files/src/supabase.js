import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kcwudbopuwrfpeuedmyl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtjd3VkYm9wdXdyZnBldWVkbXlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyMDgyNzgsImV4cCI6MTk4OTc4NDI3OH0.rNBDfFpzWqIaDLGbuK4TRfCuSsKHAQrakC6i3kGKzw8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
