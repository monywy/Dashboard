import { fetchLatestInvoices, fetchRevenue } from "../lib/data";
import { lusitana } from '@/app/ui/fonts';
import RevenueChart from "../ui/dashboard/revenue-chart";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import CardWrapper, { Card } from "../ui/dashboard/cards";
import {fetchCardData} from '@/app/lib/data';
import { Suspense } from "react";
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from "../ui/skeletons";

import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Page() {
  return <p>Dashboard Page</p>;
}