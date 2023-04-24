import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';

export default function EmployeeList() {
  return (
    <>
      <HeadMeta
        title="Employee Directory"
        description="Page with list of all employee who are assigned to this app"
      />
      <main>
        <div className="text-2xl flex items-center justify-center h-screen">
          <h1>Employee List</h1>
        </div>
      </main>
    </>
  );
}
