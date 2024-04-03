interface FeatureSet {
  [key: string]: string;
}

interface PricingComparison {
  free: {
    features: FeatureSet;
    pricing: {
      monthly: string;
      yearly: string;
    };
  };
  standard: {
    features: FeatureSet;
    pricing: {
      monthly: string;
      yearly: string;
    };
  };
  premium: {
    features: FeatureSet;
    pricing: {
      monthly: string;
      yearly: string;
    };
  };
}

export const pricingComparison: PricingComparison = {
  free: {
    features: {
      basicFeatures: "Limited",
      customerSupport: "Community",
      storageSpace: "1GB",
      advancedTools: "Not Available",
      collaboration: "Basic",
      securityFeatures: "Basic",
      dataExport: "Not Available",
      customBranding: "Not Available",
      mobileAccess: "Not Available",
      integrations: "Not Available",
    },
    pricing: {
      monthly: "$0",
      yearly: "$0",
    },
  },
  standard: {
    features: {
      basicFeatures: "Full",
      customerSupport: "Email",
      storageSpace: "10GB",
      advancedTools: "Limited Access",
      collaboration: "Moderate",
      securityFeatures: "Enhanced",
      dataExport: "Limited Access",
      customBranding: "Not Available",
      mobileAccess: "Not Available",
      integrations: "Basic",
    },
    pricing: {
      monthly: "$10",
      yearly: "$100",
    },
  },
  premium: {
    features: {
      basicFeatures: "Full",
      customerSupport: "Priority",
      storageSpace: "Unlimited",
      advancedTools: "Full Access",
      collaboration: "Advanced",
      securityFeatures: "Advanced",
      dataExport: "Full Access",
      customBranding: "Limited Access",
      mobileAccess: "Limited Access",
      integrations: "Advanced",
    },
    pricing: {
      monthly: "$25",
      yearly: "$250",
    },
  },
};
