import { useTranslation } from "react-i18next";

const Notifications = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl">

      <h2 className="text-xl font-semibold text-black dark:text-white mb-6">
        {t("notificationsTab")}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Notification preferences are not available yet. No preference is being saved from this page.
      </p>

    </div>
  );
};

export default Notifications;
