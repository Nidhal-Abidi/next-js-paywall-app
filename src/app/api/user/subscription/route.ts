import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import db from "@/lib/db";

export async function PATCH(request: NextRequest) {
  try {
    // Get the current session
    const session = await auth();

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get current user data to check subscription status
    const currentUser = await db.user.findUnique({
      where: { id: session.user.id },
      select: { has_subscription: true },
    });

    if (!currentUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check if user is already subscribed
    if (currentUser.has_subscription) {
      return NextResponse.json(
        { error: "User is already subscribed" },
        { status: 400 }
      );
    }

    // Update the user's subscription status
    const updatedUser = await db.user.update({
      where: { id: session.user.id },
      data: { has_subscription: true },
      select: {
        id: true,
        has_subscription: true,
        name: true,
        email: true,
      },
    });

    return NextResponse.json({
      message: "Subscription updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating subscription:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
