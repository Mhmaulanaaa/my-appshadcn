import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Menu, Wifi, Users, Gauge, Activity } from "lucide-react";
import { useState } from "react";

const chartData = [
  { name: "00:00", users: 400 },
  { name: "04:00", users: 300 },
  { name: "08:00", users: 900 },
  { name: "12:00", users: 1400 },
  { name: "16:00", users: 1000 },
  { name: "20:00", users: 1600 },
];

export default function DashboardGarudaFiber() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: open ? 260 : 80 }}
        className="bg-black text-white h-screen p-5 sticky top-0 flex flex-col"
      >
        <button onClick={() => setOpen(!open)} className="mb-6">
          <Menu />
        </button>

        <nav className="space-y-4 mt-4">
          <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
            <Wifi />
            {open && <span>Dashboard</span>}
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
            <Users />
            {open && <span>Pelanggan</span>}
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
            <Gauge />
            {open && <span>Speed Test</span>}
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
            <Activity />
            {open && <span>Monitoring OLT/ONU</span>}
          </div>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard Garuda Fiber</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {["Total Pelanggan", "Traffic Harian", "Perangkat Aktif"].map(
            (title, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <Card className="shadow-lg hover:shadow-xl transition">
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-3xl font-bold">
                    {i === 0 && "1,245"}
                    {i === 1 && "742 Mbps"}
                    {i === 2 && "87%"}
                  </CardContent>
                </Card>
              </motion.div>
            )
          )}
        </div>

        {/* Chart */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Realtime User Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              <ResponsiveContainer>
                <LineChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="users" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Tabel & Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Table Pelanggan */}
          <Card>
            <CardHeader>
              <CardTitle>Pelanggan Aktif</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Nama</th>
                    <th className="text-left py-2">Paket</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { nama: "Andi", paket: "50 Mbps", status: "Online" },
                    { nama: "Budi", paket: "100 Mbps", status: "Offline" },
                    { nama: "Siti", paket: "20 Mbps", status: "Online" },
                  ].map((item, i) => (
                    <tr key={i} className="border-b">
                      <td className="py-2">{item.nama}</td>
                      <td className="py-2">{item.paket}</td>
                      <td className="py-2 font-semibold text-green-600">
                        {item.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Widget Speed Test */}
          <Card>
            <CardHeader>
              <CardTitle>Speed Test</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="text-5xl font-bold">92 Mbps</div>
                <Button className="w-full">Run Test</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monitoring OLT/ONU */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Monitoring OLT / ONU</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {["OLT-1", "OLT-2", "ONU-12", "ONU-77"].map((d, i) => (
                <div
                  key={i}
                  className="p-4 bg-gray-200 rounded-xl font-semibold"
                >
                  {d}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
