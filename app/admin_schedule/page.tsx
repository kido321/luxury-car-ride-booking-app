import { createClient } from '@supabase/supabase-js';
import AdminDashboardClient from '@/components/Admin_schedule';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function getBookings() {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('date', { ascending: true });

  if (error) {
    console.error('Error fetching bookings:', error);
    return [];
  }

  return data || [];
}

export default async function AdminDashboard() {
  const bookings = await getBookings();

  return <AdminDashboardClient bookings={bookings} />;
}