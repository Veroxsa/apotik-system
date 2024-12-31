import { NextResponse } from 'next/server';
import db from '../../../lib/db';

// API route
export async function POST(req: Request) {
  try {
    const { nama, jenis_kelamin, usia, poliklinik, tanggal_lahir } = await req.json();

    if (!nama || !jenis_kelamin || !usia || !poliklinik || !tanggal_lahir) {
      return NextResponse.json(
        {
          success: false,
          message: 'All fields are required',
        },
        { status: 400 }
      );
    }

    // query insert data
    const sql = `
      INSERT INTO user (nama, jenis_kelamin, usia, poliklinik, tanggal_lahir, status_ticket, created_at, last_update)
      VALUES (?, ?, ?, ?, ?, 'waiting', NOW(), NOW())`;
    const values = [nama, jenis_kelamin, usia, poliklinik, tanggal_lahir];

    // Execute the query
    const [result] = await db.query(sql, values);

    // result response
    return NextResponse.json({
      success: true,
      message: 'Registration successful',
      data: result,
    });
  } catch (error) {
    // Log error and send response
    console.error('Registration error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error inserting data into database',
        error: error.message,
      },
      { status: 500 }
    );
  }
}