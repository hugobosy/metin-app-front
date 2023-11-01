import styles from "./Table.module.scss";
import { ColumnDef, getCoreRowModel } from "@tanstack/table-core";
import { flexRender, useReactTable } from "@tanstack/react-table";
import { ComponentPropsWithoutRef } from "react";
import classNames from "classnames";

export interface TableProps<T> extends ComponentPropsWithoutRef<"table"> {
  className?: string;
  data?: T[];
  columns: ColumnDef<T, any>[];
}

export const Table = <T extends Record<string, any>>({
  data,
  columns,
  className,
}: TableProps<T>) => {
  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={classNames(styles.wrapper, className)}>
      <table className={styles.table}>
        <thead className={styles["table-header"]}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={styles["table-header-item"]}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, i) => {
            const rowStyle = {
              backgroundColor:
                i % 2 === 0 ? "var(--color-blue-900)" : "var(--color-blue-800)",
            };
            return (
              <tr key={row.id} style={rowStyle}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={styles["table-body-item"]}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};
