export function convertToSubCurrency(amount: number, factor = 100) {
  return Math.round(amount * factor);
}

export function getRegisterPageErrorMessage(error: string) {
  switch (error) {
    case "UserExists":
      return "An account with this email already exists. Please try logging in instead.";
    case "DatabaseError":
      return "There was a problem creating your account. Please try again later.";
    default:
      return "An unexpected error occurred. Please try again.";
  }
}

export const getLoginPageErrorMessage = (error: string) => {
  switch (error) {
    case "CredentialsSignin":
      return "Invalid email or password. Please try again.";

    case "Configuration":
      return "There was a problem with the server configuration.";

    case "CallbackRouteError":
    case "SessionTokenError":
    case "JWTSessionError":
      return "Authentication error";

    case "OAuthAccountNotLinked":
      return "Email is already linked to a different OAuth provider";

    case "AccessDenied":
      return "User denied permission during OAuth flow or GitHub blocked the request";

    case "OAuthSignin":
      return "OAuth signin error";

    default:
      return "An unexpected error occurred. Please try again.";
  }
};

export const selectedTierColor = (tierName: "bronze" | "silver" | "gold") => {
  switch (tierName) {
    case "bronze":
      return "border-[#9a4d00] bg-[#f8eedf]";
    case "silver":
      return "border-[#898989] bg-[#D7D7D8]";
    case "gold":
      return "border-[#ffbf00] bg-[#faf9d0]";
  }
};

export const tierColorOnHover = (tierName: "bronze" | "silver" | "gold") => {
  switch (tierName) {
    case "bronze":
      return "hover:border-[#9a4d00] hover:bg-[#f8eedf]";
    case "silver":
      return "hover:border-[#898989] hover:bg-[#D7D7D8]";
    case "gold":
      return "hover:border-[#ffbf00] hover:bg-[#faf9d0]";
  }
};

export const tierPriceColor = (tierName: "bronze" | "silver" | "gold") => {
  switch (tierName) {
    case "bronze":
      return "text-[#9a4d00]";
    case "silver":
      return "text-[#898989]";
    case "gold":
      return "text-[#ffbf00]";
  }
};

export const selectedButtonBgColor = (
  tierName: "bronze" | "silver" | "gold"
) => {
  switch (tierName) {
    case "bronze":
      return "bg-[#9a4d00] border-[#9a4d00]";
    case "silver":
      return "bg-[#898989] border-[#898989]";
    case "gold":
      return "bg-[#ffbf00] border-[#ffbf00]";
  }
};

export const paymentButtonColor = (tierName: "bronze" | "silver" | "gold") => {
  switch (tierName) {
    case "bronze":
      return "bg-[#9a4d00] hover:bg-[#B56E26] focus:ring-[#B56E26]";
    case "silver":
      return "bg-[#898989] hover:bg-[#A8A8A8] focus:ring-[#A8A8A8]";
    case "gold":
      return "bg-[#ffbf00] hover:bg-[#FFCC0D] focus:ring-[#FFCC0D]";
  }
};
