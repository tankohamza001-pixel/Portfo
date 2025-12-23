import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

// CREATE
export async function POST(request) {
  try {
    await connectDB();
    const { name, email, phone, message } = await request.json();
    const newContact = await Contact.create({ name, email, phone, message });
    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
      newContact,
    });
  } catch (error) {
    console.error("Error in POST /api/contact", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// READ ALL
export async function GET() {
  try {
    await connectDB();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, contacts });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// UPDATE
export async function PUT(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { id, name, email, phone, message } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Contact ID is required" },
        { status: 400 }
      );
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { name, email, phone, message },
      { new: true }
    );

    if (!updatedContact) {
      return NextResponse.json(
        { success: false, message: "Contact not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Contact updated successfully",
      updatedContact,
    });
  } catch (error) {
    console.error("Error in PUT /api/contact", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}


// DELETE
export async function DELETE(request) {
  try {
    await connectDB();
    const { id } = await request.json();

    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      return NextResponse.json(
        { success: false, message: "Contact not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    console.error("Error in DELETE /api/contact", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
