"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const UsersTable = ({data}:{data:{email:string,firstName:string, lastName:string}[]})=>{
  return (
    <Table>
      <TableCaption>Users Data</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Email</TableHead>
          <TableHead className="text-right">First Name</TableHead>
          <TableHead className="text-right">Last Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(user => (
          <TableRow key={user.email}>
            <TableCell className="font-medium">{user.email}</TableCell>
            <TableCell className="text-right">{user.firstName}</TableCell>
            <TableCell className="text-right">{user.lastName}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{data.length} users</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default UsersTable